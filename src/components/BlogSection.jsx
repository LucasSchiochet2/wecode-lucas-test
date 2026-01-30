import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import '../styles/BlogSection.scss'

const posts = [
  {
    id: 1,
    title: 'NOVO LOGO, MESMA ESSÊNCIA.',
    description:
      'A paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!',
    image: '/blog/blog3.png',
  },
  {
    id: 2,
    title: 'É AMANHÃ,',
    description:
      'SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️',
    image: '/blog/blog2.png',
  },
  {
    id: 3,
    title: 'COLEÇÃO OUTONO INVERNO 2024',
    description:'descubra o glamour em cada passo.',
    image: '/blog/blog1.png',
  },
]

export default function BlogSection() {
  return (
    <section className="blog-section">
      <h2 className="blog-section__title">Conheça mais</h2>
      <p className="blog-section__subtitle">
        Fique por dentro de tudo que acontece na Bebecê
      </p>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={16}
        pagination={{ clickable: true }}
      >
        {posts.map(post => (
          <SwiperSlide key={post.id}>
            <article className="blog-card">
              <img
                src={post.image}
                alt={post.title}
                className="blog-card__image"
              />

              <div className="blog-card__content">
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__description">{post.description}</p>
                <p href="#">Saiba Mais!</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
