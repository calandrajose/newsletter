import { Fragment, useState, useEffect } from "react";
import axios from 'axios'
import Header from './components/Header'
import Form from './components/Form/Form'
import News from './components/News'

function App() {

  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');
  const [news, setNews] = useState('');

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await axios.get(`https://newsapi.org/v2/top-headlines?country=${!country?'ar':country}&category=${!category?'general':category}`, {
        headers: {
          'X-Api-Key': process.env.REACT_APP_API_KEY
        }
      });
      setNews(result);
    }
    fetchAPI()
  }, [category, country])

  return (
    <Fragment>
      <Header title='Buscador de Noticias' />
      <div className='container white'>
        <Form
          setCategory={setCategory} 
          setCountry={setCountry} 
        />
        {news ? <News
          news={news}/> : null}
      </div>
    </Fragment>
  );
}

export default App;
