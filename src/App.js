import React, {useState} from "react";
import './styles/App.css'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Тима', body: 'С ДНЕМ РОЖДЕНИЯ, ГАМАСООН' },
    {id: 2, title: 'Макс!', body: 'С днём рождения, Марк\n' +
          'Тебе уже 22 лет😱\n' +
          'Как же быстро летит время 😱😍\n' +
          'Желаю тебе этот день провести на все 100%🎊🎉\n' +
          'Оставайся такой же:милой💋красивой😍доброй❤веселой девочкой😌\n' +
          'Желаю большого крепкого здоровья💪\n' +
          'Большой крепкой дружной любви❤\n' +
          'Успехов тебе в дальнейшей учёбе 😜\n' +
          'Счастья тебе❤\n' +
          'Крч😅желаю тебе всего самого наилучшего❤🎊🎉🎂🎁' },
    {id: 3, title: 'Аня', body: 'С ДНЕМ РОЖДЕНИЯ!!! ВСЕГО НАИЛУЧШЕГО!!!' },
  ])

  const [posts2, setPosts2] = useState([
    {id: 1, title: '', body: 'Девки, Марк — отличный парень! Даже круче чем Бред Пит! После секса отвернется, и тихонечко храпит. ' },
    {id: 2, title: '', body: 'Марк у нас — крутой рыбак! Все мысли о рыбалке. У него даже жена не баба — а русалка! ' },
    {id: 3, title: '', body: 'Туфли новые блестят, рубаха наутюжена. Марку не нужна жена — у него их дюжина! ' },
  ])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const removePost2 = (post) => {
    setPosts2(posts2.filter(p => p.id !== post.id))
  }

  return (
      <div className="App">
        <PostForm create={createPost}/>
        {posts.length !== 0
            ?
            <PostList remove={removePost} posts={posts} title='Поздравления'/>
            :
            <h1 style={{textAlign: 'center'}}>
              Куда все удаляешь то...
            </h1>
        }
        {posts2.length !== 0
            ?
            <PostList remove={removePost2} posts={posts2} title='Стишки'/>
            :
            <h1 style={{textAlign: 'center'}}>
              Остановись...
            </h1>
        }
      </div>
  );
}

export default App;