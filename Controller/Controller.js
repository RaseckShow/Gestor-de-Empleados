const controller = {};

controller.list = (req, res) =>{
    req.getConnection((err,con) =>{
        con.query("SELECT * FROM empleados",(err,rows) =>{
            if(err){
            res.json(err);
            // next(error); mejor manejo de errores
            }
            res.render("empleados",{
                data: rows
            });
        });
    });
};

controller.save = (req,res)=>{
    const data = req.body;
    req.getConnection((err, conn) =>{
        
        conn.query("INSERT INTO empleados VALUES ('3','"+ data.Nombre + "','" + data.Puesto +"',"+data.Salario+")", (err,empleado)=>{
            res.redirect("/");
        });
    });
};

controller.delete = (req,res)=>{
    const {id} = req.params;
    req.getConnection((err, conn)=>{
        conn.query('DELETE FROM empleados WHERE ID= '+id,(err,rows)=>{
            res.redirect("/");
        });
    });
};

controller.edit = (req,res)=>{
    const {id} = req.params;
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM empleados WHERE ID = '+id,(err,rows)=>{
            if(err){
                res.json(err);
                // next(error); mejor manejo de errores
            }
            res.render('editEmpleado',{
                data: rows[0]
            });
        });
    });
};

controller.update = (req,res) =>{
    const {id}= req.params;
    const updateEmpleado = req.body;
    req.getConnection((err,conn)=>{
        conn.query("UPDATE empleados SET ? WHERE ID = ?",[updateEmpleado,id],(err,rows)=>{
            res.redirect("/");
        })
    })
}

module.exports = controller;
