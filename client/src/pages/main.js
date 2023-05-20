import React, {useState, useEffect} from 'react'
import Card from '../components/card'
import Nav from '../components/nav'
import Search from '../components/search'
import { Link } from 'react-router-dom'
import '../css/main.css'

function Main() {

  const [datas, setData] = useState([])
  const [word, setWord] = useState('')
  const [categorie, setCategorie] = useState('all')
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(12);
  
  useEffect(() => {
    fetch("/allfood")
      .then(res => res.json())
      .then(data => {
        setData(data);
    });
  }, [])

  const handleSearchSubmit = (e) => {
    
    e.preventDefault();

    if(word === ''){
      fetch(`categories=${categorie}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }else {
      fetch(`/name=${word}&categories=${categorie}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const handleDetail = (e) => {
    fetch(`/id=${e}`)
        .then((res) => res.json())
        .then((data) => {
        })
        .catch((err) => {
          console.log(err);
        });
  }

  

  return (
    <div className='app'>
      <Nav/>
      <Search word={word} setWord={setWord} categorie={categorie} setCategorie={setCategorie} handleSubmit={handleSearchSubmit}/>
      <div className='content-container'>
        <div className='content'>
          {(typeof datas === 'undefined') ? 
          (<p> Loading...</p>) :
          (
            datas.slice(min, max ? max : datas.length).map((member, i) => (
              <div className='shopCard' key={i} 
                onClick={() => {     
                  handleDetail(member._id)
              }}>
                <Link to="/detail" state={{shop: {member}}}><Card data={member}></Card></Link>
              </div>
            ))
          )}
        </div>
      </div>
      <div className='changeItem'>
        <div className='changeItemButton'>
          <button className='set' onClick={() => {
            if (min >= 12) {
              setMin(min-12);
              setMax(max-12)
            } else if(min > 0){
              setMin(0);
              setMax(12);
            } 
          }}>
            Back
          </button>
          <button className='set' onClick={() => {
            if ( max <= datas.length-12) {
              setMin(min+12);
              setMax(max+12);
            } else if( max < datas.length){
              setMin(datas.length-13);
              setMax(datas.length-1);
            } 
          }}>
            Next
          </button>
        </div>
      </div>

    </div>
  )
}

export default Main