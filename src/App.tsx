import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import sytles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/53191543?v=4',
      name: 'Gustavo Alessandro',
      role: 'Web developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare' },
      { type: 'link', content: 'Jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-04 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educador @rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare' },
      { type: 'link', content: 'Jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-12-10 20:00:00'),
  },
]

function App() {

  return (
    <>
      <Header />

      <div className={sytles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
