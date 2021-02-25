import React from 'react';
import classes from './Form.module.css'
import useSelect from '../../hooks/useSelect'
import PropTypes from 'prop-types'


const Form = ({setCategory, setCountry}) => {
    const CATEGORIES= [
        {value:'business' , display:'Negocios'},
        {value:'entertainment' , display:'Entretenimiento'},
        {value:'general' , display:'Interes General'},
        {value:'health' , display:'Salud'},
        {value:'science' , display:'Ciencia'},
        {value:'sports' , display:'Deportes'},
        {value:'technology' , display:'Tecnologia'}
    ];
    const COUNTRIES = [
        {value:'ar' , display:'Argentina'},
        {value:'mx' , display:'Mexico'},
        {value:'us' , display:'Estados Unidos'},
        {value:'br' , display:'Brasil'},    
    ];

    const [category, SelectCategory] = useSelect('general', CATEGORIES );
    const [country, SelectCountry] = useSelect('ar', COUNTRIES );

    const onSubmitHandler = (e)=>{
        e.preventDefault()
        setCategory(category)
        setCountry(country)
    }

    return (
        <div className={`${classes.Search} row`}>
            <div className='col s12 m8 offset-m2'>
                <form 
                    onSubmit={onSubmitHandler}>
                    <h2 className={classes.Heading}>Encuentra Noticias por Categoria</h2>
                        <SelectCountry/>
                        <SelectCategory/>
                    <div className='input-field col s12'>
                        <input
                            type='submit'
                            className={`${classes['btn-block']} btn-large amber darken-2`}
                            value='Buscar'
                        />
                    </div>
                </form>
            </div>
            
        </div>
    );
};

Form.propTypes = {
    setCategory: PropTypes.func.isRequired,
    setCountry: PropTypes.func.isRequired,
}

export default Form;