const express = require('express')
const router = express.Router()
const connection = require('../connection.js')

router.get('/', (req, res) => {

    const sql = `select * from todosdb`
    connection.query(sql, (err, result) => {
        if(err){
            console.log('Ocurrio un Error a obtener los datos')
        }else{
            res.send(result.rows)
            console.log('Se Obtuvieron los datos con exitos')
        }
        
    }) 
    
    // res.send('LA RUTA FUNCIONA')
    
})  


router.post('/', (req, res) => {
     const sql = 'INSERT INTO todosdb(id, completed, todotext) VALUES($1, $2, $3)'
     const data = [req.body.id, req.body.completed, req.body.todotext]
    //  const data = [req.body]
     connection.query(sql, data, (err, result) => {
        if(err){

            console.log('ah ocurrido un error al insertar el registro en la tabla todosdb')
            console.log(err)
        }else{

            console.log('Todo Registrado')
            console.log(result)
            // res.send('registrado')
        }

    })
    
    // connection.end()
     console.log(req.body)

})


router.put('/:id', (req, res) => {

    const sql = "UPDATE todosdb SET completed = $1  WHERE id = $2"
    const { id } = req.params
    const { completed } = req.body
    
    connection.query(sql, [completed, id], (err, result) => {
        if(err){
            console.log("Hubo un error con la actulizacion del todo")
            console.log(err)
        }else{
            console.log('Registro Actulizado con Exitos')
        }
        
    })
    console.log(req.body)
})


router.delete('/ClearCompleted', (req, res) => {
    const sql = "DELETE FROM todosdb WHERE completed = true"

    connection.query(sql, (err, result) => {
        if(err){
            console.log("Hubo un error al Eliminar los Registros")
            console.log(err)
        }else{
           console.log("Registros Eliminados con Exito")
         //   console.log(result)
        }
    })

    // console.log(req.body)
})


router.delete('/:id', (req, res) => {
       const sql = "DELETE FROM todosdb WHERE id = $1"
       const id = req.params.id

       connection.query(sql, [id], (err, result) => {
           if(err){
               console.log("Hubo un error al Eliminar el Registro")
               console.log(err)
           }else{
              console.log("Registro Eliminado con Exito")
            //   console.log(result)
           }
       })

       console.log(req.body)
})



module.exports = router