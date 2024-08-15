<template>
    
    <div class="container" id="payment-container">
      <div id="payment-form">
        <h1>Proceso de Pago</h1>
        <form @submit.prevent="handleSubmit" id="payment-form-content">
          <fieldset>
            <legend>Información del Cliente</legend>
            <label for="name">Nombre:</label>
            <input
              type="text"
              id="name"
              v-model="name"
              required
              pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+"
              title="El nombre solo puede contener letras y espacios"
            />

            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" v-model="email" required />

            <label for="address">Dirección:</label>
            <input type="text" id="address" v-model="address" required />
          </fieldset>

          <fieldset>
            <legend>Detalles del Pago</legend>
            <label for="card-number">Número de Tarjeta:</label>
            <input
              type="text"
              id="card-number"
              v-model="cardNumber"
              required
              pattern="\d{16}"
              title="El número de tarjeta debe tener 16 dígitos"
            />

            <label for="expiry-date">Fecha de Expiración:</label>
            <input
              type="text"
              id="expiry-date"
              v-model="expiryDate"
              placeholder="MM/AA"
              required
              pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
              title="La fecha de expiración debe estar en formato MM/AA y ser válida"
            />

            <label for="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              v-model="cvv"
              required
              pattern="\d{3,4}"
              title="El CVV debe tener 3 o 4 dígitos"
            />
          </fieldset>

          <button type="submit">Pagar</button>
        </form>
        <div id="confirmation-message">{{ confirmationMessage }}</div>
      </div>
    </div>

</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      address: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      confirmationMessage: "",
    };
  },
  methods: {
    handleSubmit() {
      if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(this.name)) {
        alert("El nombre solo puede contener letras y espacios.");
        return;
      }

      if (!/\S+@\S+\.\S+/.test(this.email)) {
        alert("Por favor, introduce un correo electrónico válido.");
        return;
      }

      if (!/^\d{16}$/.test(this.cardNumber)) {
        alert("El número de tarjeta debe tener 16 dígitos.");
        return;
      }

      if (!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(this.expiryDate)) {
        alert("La fecha de expiración debe estar en formato MM/AA y ser válida.");
        return;
      }

      if (!/^\d{3,4}$/.test(this.cvv)) {
        alert("El CVV debe tener 3 o 4 dígitos.");
        return;
      }

      this.confirmationMessage = "¡Pago realizado con éxito!";
      document.getElementById("payment-container").classList.add("submitted");
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

body {
font-family: 'Roboto', sans-serif;
background-color: #f4f4f4;
margin: 0;
padding: 0;
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
}

.container {
width: 300px; 
padding: 20px;
background: #ffffff;
border-radius: 12px;
box-shadow: 0 10px 20px rgb(255, 136, 0);
transition: transform 0.4s ease, opacity 0.4s ease;
margin: auto;
}


.container.submitted {
  transform: scale(0.9);
  opacity: 0.7;
}

h1 {
  text-align: center;
  color: #333;
  font-size: 22px;
  margin-bottom: 15px;
}

form {
  display: flex;
  flex-direction: column;
}

fieldset {
  border: none;
  padding: 0;
  margin-bottom: 15px;
}

legend {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #444;
}

label {
  font-size: 14px;
  margin-bottom: 5px;
  color: #666;
  display: block;
  width: 100%;
}

input {
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-bottom: 10px;
  width: 100%;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #6c757d;
  outline: none;
}

button {
  background-color: #e04507;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s;
  width: 100%;
}

button:hover {
  background-color: #d63b00;
  transform: translateY(-3px);
}

button:active {
  background-color: #bf3700;
  transform: translateY(1px);
}

#confirmation-message {
  margin-top: 15px;
  text-align: center;
  font-weight: bold;
  color: #28a745;
  font-size: 16px;
}
</style>