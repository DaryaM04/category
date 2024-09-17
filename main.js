const content = document.querySelector('.cards_container');
/* Находим все карточки */
const cards = content.querySelectorAll('.item_container');
/* Создаём массив строк, с названиями карточек, что бы в дальнейшем использовать его
для поиска нужных классов */
const cardsImages = ['pesticidi', 'cultura', 'vrediteli', 'veschestva'];

window.addEventListener('click', (event) =>
    {
      /* Ищем ближайший блок с классом .card */
      const card = event.target.closest('.item_container');
      console.log(card);
    
      /* Заранее в цикле ичищаем карточки от не нужных классов */ 
      cards.forEach((elem) => 
      {
        /* Сначала находим и удаляем (если он есть) класс отвечающий за смену картинки в блоке card__image,
        в зависимости от того, какой дополнительный класс присвоен этому блоку (класс должен содержать
        строки 'pesticidi' или 'cultura') */ 
        const elemImage = elem.querySelector('.card_image');
        const elemHead = elem.querySelector('.card_head');
        console.log(elemHead);
        console.log(elemImage);
        const currentImage = cardsImages.find((item) => elemImage.className.includes(item));
        console.log(currentImage)
    
        elemImage.classList.remove(`${currentImage}_image_active`);
        elem.classList.remove('card_active_bgc');
        elemHead.classList.remove('card_head_active');
        console.log(elemHead);

      });
    
      /* Если ближайший блок с классом .card найден, то... */
      if(card)
      { 
        /* Находим текущий класс отвечающий за картинку */ 
        const elemImage = card.querySelector('.card_image');
        const elemHead = card.querySelector('.card_head');
        console.log(elemImage);
        const currentImage = cardsImages.find((item) => elemImage.className.includes(item));
    
        /* В цикле находим текущий класс отвечающий за анимацию кругов.
        В случае успеха удаляем текущий класс и присваиваем класс со следующим порядковым номером,
        и выходим из цикла.  */ 
        for(let i = 0; i < 4; i++)
        {
          const currentAnim = card.className.includes(`card_active_animation_${i}`);
          console.log(currentAnim);
          if(currentAnim)
          {
            card.classList.remove(`card_active_animation_${i}`);
            card.classList.add(`card_active_animation_${(i + 1) % 4}`);
            console.log(`card_active_animation_${(i + 1) % 4}`)
            console.log(card)
            break;
          }
        }
    
        /* Добавляем класс отвеяающий за активную картинку и цвет заднего фона */ 
        elemImage.classList.add(`${currentImage}_image_active`);
        card.classList.add('card_active_bgc');
        elemHead.classList.add('card_head_active');
        console.log(elemHead);

      }
    })