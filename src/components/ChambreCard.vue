<template>
    <div class="chambre-card" style="border: 1px solid red; padding: 1rem;">
        <p>Je suis une chambre !</p>
    </div>
    <!-- <div class="chambre-card">
        <div class="image-section">
            <div class="image-placeholder" v-for="n in 3" :key="n">4096X2304</div>
        </div>
        <div class="info-section">
            <div class="header">
                <h2>Chambre 01 <span class="size">de 12m²</span></h2>
                <div class="price">650€<span class="per">/mois</span></div>
            </div>

            <p class="subtitle">Meublée - SDB individuelle</p>

            <div class="equipements">
                <h3>Équipements</h3>
                <div class="equipement-item">
                    <div class="icon-placeholder"></div>
                    <span>Douche</span>
                </div>
                <button class="see-all">voir tous les équipements</button>
            </div>

            <div class="details">
                <div class="detail-row">
                    <span class="dot green"></span>
                    <span>Disponible à partir du</span>
                    <strong>09 avril 2025</strong>
                </div>
                <div class="detail-row">
                    <span class="dot green"></span>
                    <span>Dépôt de garantie</span>
                    <strong>580€</strong>
                </div>
            </div>

            <button class="rent-button">Louer</button>
        </div>
    </div> -->
</template>

<script>
export default {
    name: 'ChambreCard',
};
</script>

<style scoped>
.chambre-card {
    display: flex;
    flex-wrap: wrap;
    background: white;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.image-section {
    background: #ccc;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1 1 200px;
    min-width: 150px;
}

.image-placeholder {
    background: #888;
    color: white;
    font-weight: bold;
    text-align: center;
    padding: 24px;
}

.info-section {
    flex: 2 1 400px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}

.header h2 {
    font-weight: bold;
    margin: 0;
}

.header .size {
    font-weight: normal;
}

.price {
    font-weight: bold;
    font-size: 1.2em;
}

.subtitle {
    color: #666;
}

.equipements h3 {
    margin-bottom: 4px;
}

.equipement-item {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
}

.icon-placeholder {
    width: 24px;
    height: 24px;
    background-color: #ccc;
    border-radius: 4px;
}

.see-all {
    align-self: start;
    background: #f2f2f2;
    border: none;
    padding: 8px 16px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #333;
}

.details {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.detail-row {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9em;
}

.dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.green {
    background-color: #21c55d;
}

.rent-button {
    align-self: flex-start;
    background: linear-gradient(90deg, #6c63ff, #8c5fff);
    color: white;
    padding: 10px 20px;
    border-radius: 12px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: 0.3s ease;
}

.rent-button:hover {
    filter: brightness(1.1);
}

/* Responsive */
@media (max-width: 768px) {
    .chambre-card {
        flex-direction: column;
    }

    .image-section {
        flex-direction: row;
        justify-content: space-around;
    }

    .info-section {
        padding: 16px;
    }
}
</style>