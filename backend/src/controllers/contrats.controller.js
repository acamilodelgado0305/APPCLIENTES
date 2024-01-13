const contratsCtrl ={};
const contratModel= require('../models/contrato')



//--------obtener contratos-------------------
contratsCtrl.getContrats=async(req, res) => {
    const contrats = await contratModel.find();
    res.json(contrats);
}  
//-----------------Obtener contrato
contratsCtrl.getContrat=async(req, res) =>  {
    const contrat= await contratModel.findById(req.params.id);
    res.json(contrat);
} 

//------------Crear contrato--------------

contratsCtrl.createContrat=async(req, res) =>{
    const {_id, megasdow, megasup, valor,descripcion} =req.body;
    const newContrat= new contratModel({
        _id,
        megasdow,
        megasup,
        valor,
        descripcion
    });
    await newContrat.save();
    res.json({ message: ['Contrat Saved'] })
}


//------------------Actualizar Contrato
contratsCtrl.updateContrat=async(req, res) => {
    const {_id, megasdow, megasup, valor,descripcion} =req.body;
    await contratModel.findByIdAndUpdate(req.params.id,{
        megasdow,
        megasup,
        valor,
        descripcion
    });
    res.json({ message:'contrato Actualizado' })
}


//Eliminar Contrato
contratsCtrl.deleteContrat=async(req, res) =>   {
    await contratModel.findByIdAndDelete(req.params.id);
    res.json({ message:'contrato eliminado' });
}


module.exports=contratsCtrl;