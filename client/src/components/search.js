import React from 'react'
import '../css/search.css'
import $ from 'jquery'

var head = document.getElementsByTagName('HEAD')[0];
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
head.appendChild(link);

const Search = ({word,setWord,categorie,setCategorie,handleSubmit}) => {

  $(function () {
    $(".search-description").hide();
    $(".main-btn").off().on("click", function () {
      $(".search-description").slideToggle(100);
    });
    $(".main-input").on("focus",function(){
      $(".main-input").val('')
    });
    $(".main-input").on("Blur",function(){
      $(".main-input").val(word);
    });
    $(".li-all").on("click",function () {
      $(".search-large").text("All")
      $(".search-description").hide();
    });
    $(".li-cafe").on("click",function () {
      $(".search-large").text("Cafe")
      $(".search-description").hide();
    });
    $(".li-restaurant").on("click",function () {
      $(".search-large").text("Restaurant")
      $(".search-description").hide();
    });
    $(".li-bakery").on("click",function () {
      $(".search-large").text("Bakery")
      $(".search-description").hide();
    });
    $("#main-submit").off().on("click", function () {
      $(".main-input").val('');
    });
  });

  return (
    <div className='search'>
      <div className="centerbox">
        <div className="main-form-container">
          <form id="" className="sform" onSubmit={handleSubmit}>
            <input 
              type="text" 
              className="main-input" 
              name="shopName" 
              onChange={(e) => {
                setWord(e.target.value);
              }} 
              placeholder="Search shop..." />
            <div className='dropbox'>
              <button type="button" className="main-btn">
                <p className="search-small">SEARCH BY</p>
                <p className="search-large">All</p>
              </button>
              <ul className="search-description">
                <li className='li-all' onClick={(e) => {
                  setCategorie("all");
                  console.log(categorie)
                }}><p>All</p></li>
                <li className='li-restaurant' onClick={(e) => {
                  setCategorie("restaurant");
                  console.log(categorie)
                }}><p>Restaurent</p></li>
                <li className='li-cafe' onClick={(e) => {
                  setCategorie("cafe");
                  console.log(categorie)
                }}><p>Cafe</p></li>
                <li className='li-bakery' onClick={(e) => {
                  setCategorie("bakery");
                  console.log(categorie)
                }}><p>Bakery</p></li>
              </ul>
            </div>
            <input id="main-submit" className="" type="submit" value="Search" />
            <button type="submit" id="main-submit-mobile">Search</button> 
          </form>
        </div>
      </div>

    </div>
  )
}

export default Search