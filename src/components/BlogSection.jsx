import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import '../styles/BlogSection.scss'
import { getPosts } from '../utils/utils'

export default function BlogSection() {
  const [posts, setPosts] = useState([])
  const [, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts()
        setPosts(data)
      } catch (error) {
        console.error("Erro ao buscar posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <section className="blog-section">
      <h2 className="blog-section__title">Conheça mais</h2>
      <p className="blog-section__subtitle">
        Fique por dentro de tudo que acontece na Bebecê
      </p>

      {posts && posts.length > 0 ? (
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={16}
          pagination={{ clickable: true }}
        >
          {posts.map((post) => (
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
      ) : (
        <p>Nenhum post encontrado.</p>
      )}
    </section>
  )
}