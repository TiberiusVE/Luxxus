import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './CreateArticle.css'

// Templates
import Header from '../../../templates/Header/Header';

const CreateArticle = props => {
    useEffect(() => {
      axios.get('/api/hello')
        .then(res => setState(res.data))
    }, [])

    const [state, setState] = useState('')

  return(
    <div>
      <p>{state}</p>
    </div>
 )
};





// class CreateArticle extends Component {

//     titleRef = React.createRef();
//     contentRef = React.createRef();

//     state = {
//         article: {},
//         status: null
//     }

//     changeState = () => {
//         this.setState({
//             article: {
//                 title: this.titleRef.current.value,
//                 content: this.contentRef.current.value
//             }
//         })
//     }

//     saveArticle = (e) => {
//         e.preventDefault();

//         // Fills state with form changes
//         this.changeState();
//     }

//     render () {

//         useEffect(() => {
//             axios.get('/api/hello')
//               .then(res => setState(res.data))
//           }, [])
      
//           const [state, setState] = useState('')

//         return (
//             <main id="create">
//                 <Header title="Containn's product overview"/>
//                 <section id="article_form">
//                     <div className="container">
//                         <div className="row">
//                             <h1>{state}</h1>
//                             <form>
//                                 <div className="form-group">
//                                     <label htmlFor="title">Title</label>
//                                     <input type="text" name="title"/>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="content">Content</label>
//                                     <textarea name="textarea"></textarea>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="file0">Imagen</label>
//                                     <input type="file" name="file0" />
//                                 </div>
//                                 <input type="submit" value="Guardar" />
//                             </form>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//         )
//     }
// }

export default CreateArticle;
