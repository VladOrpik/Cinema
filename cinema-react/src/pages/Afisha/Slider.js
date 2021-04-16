import slider1 from '../Afisha/img/slider1.jpg';
import slider2 from '../Afisha/img/slider2.jpg';
import slider3 from '../Afisha/img/slider3.jpg';
import '../Afisha/sliderstyle.css';
function Slider(){
    return(
        <div className="slider__item">
        <section className='galeria'>
          <input type="radio" id="uno" value="1" name="tractor" checked='checked' />    
        <input type="radio" id="dole" value="2" name="tractor" />      
        <input type="radio" id="tele" value="3" name="tractor" />
          <article className='card una'>
            <h2 className='entypo-tag'>Она — океан</h2>
              <p>Девять удивительных женщин от 12 до 85 лет из разных уголков планеты, посвятивших себя океану, раскроют свою жизнь. В фильме мы будем взрослеть с 12-летней индонезийской девочкой Чинтой Хэнсел — надеждой отца-шейпера с Гавайев, которая мечтает стать чемпионкой мира по серфингу. Будем побеждать с легендами мирового серфинга — Коко Хо и Кеалой Кеннели, которые добились невероятных высот в профессиональном спорте и покорили могучие волны. Мы будем плавать с акулами без клетки со знаменитой заклинательницей акул Оушн Рамзи, спрыгнем с 23-метрового обрыва с чемпионкой мира по фридайвингу Анной Бадер и на одном дыхании погрузимся в голубую бездну вместе с фридайвером из Чили Розой Молиной. Мы отправимся на самое дно океана в глубоководной субмарине с первой в мире женщиной — морским биологом Сильвией Эрл, посвятившей жизнь изучению и спасению мирового океана.<br/>
        </p>
           
            <label for='dole' className='entypo-left-bold otra'></label>
            <label for='tele' className='entypo-right-bold otra'></label>
            <label for='uno' className='entypo-arrows-ccw afin'></label>  
          </article>
          
          <article className='card dos'>
            <h2 className='entypo-feather'>Годзилла против Кинг Конга</h2>
              <p>Конг и группа ученых отправляются в опасное путешествие в поисках родного дома гиганта. Среди них девочка Джия, единственная, кто умеет общаться с Конгом. Неожиданно они сталкиваются с разъяренным Годзиллой, разрушающим все на своем пути. Битва двух титанов, спровоцированная неведомыми силами — лишь малая часть тайны, спрятанной в недрах Земли..<br/>
       </p>
           
            <label for='tele' className='entypo-left-bold otra'></label>
            <label for='uno' className='entypo-right-bold otra'></label>
            <label for='dole' className='entypo-arrows-ccw afin'></label>  
          </article>
          
          <article className='card tres'>
            <h2 className='entypo-address'>Скайлайн 3 </h2>
              <p>Через 15 лет после вторжения неизвестный вирус угрожает хрупкому сосуществованию дружественных инопланетных гибридов и людей. Родившаяся на космическом корабле мутант Роуз Корли сама испытывает трудности с управлением огневой рукой, когда на неё выходят члены сопротивления. Они предлагают девушке в составе хорошо подготовленного отряда, куда входит и её брат-инопланетянин Трент, отправиться на вражескую планету и захватить сердечник разрушенного корабля, который поможет спасти человечество.<br/>
                </p>
           
            <label for='uno' className='entypo-left-bold otra'></label>
            <label for='dole' className='entypo-right-bold otra'></label>
            <label for='tele' className='entypo-arrows-ccw afin'></label>  
          </article>
        </section>
        
        </div>
    )
}






export default Slider;