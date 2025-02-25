let langugeChangeBtn = document.getElementById('language-change')
let masterName = document.getElementById('creator-name')
let titleUnderName = document.getElementById('title-1')
let titleInOrderSection = document.getElementById('title-2')
let whatsAppBtn = document.getElementById('whatsapp')
let adres = document.getElementById('adress')
let adresInfo = document.getElementById('adress-info')

let isUzbek = false;

langugeChangeBtn.addEventListener('click', () => {
  if (!isUzbek) {
    isUzbek = true;
    langugeChangeBtn.textContent = 'Русский'
    masterName.textContent = `Usta Ne'matjon`
    titleUnderName.textContent = `Assalomu alaykum, biz siz ucun istalgan turdagi noningiz uchun hamyonbop Non aparat dastgonlarini tayyorlab beremiz.`
    titleInOrderSection.textContent = `Hoziroq buyurtma berib, usta Ne'matjon Non aparat innovatsion 5 yulduzli xizmatga ega bo'ling!`
    whatsAppBtn.innerHTML = `<span><i class="bi bi-whatsapp"></i></span> Hoziroq buyurtma bering! <span></span>`
    adres.textContent = 'Manzil'
    adresInfo.textContent = `O'zbekiston, Farg'ona vilopyati, Uchko'prik tumani `
  } else {
    isUzbek = false;
    langugeChangeBtn.textContent = `O'zbekcha`
    masterName.textContent = `Мастер Неъматжон`
    titleUnderName.textContent = `Здравствуйте! Мы изготавливаем доступные аппараты для выпечки хлеба для любого вида хлебобулочных изделий.`
    titleInOrderSection.textContent = `Получите инновационное обслуживание на 5 звёзд от мастера Нематжона Нон аппарат, оформив заказ прямо сейчас!`
    whatsAppBtn.innerHTML = `<span><i class="bi bi-whatsapp"></i></span> Заказывайте сейчас! <span></span>`
    adres.textContent = 'Адрес'
    adresInfo.textContent = 'Узбекистан, обл.Фергана, р.Учкуприк'
  }
})