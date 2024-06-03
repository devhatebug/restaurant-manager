const getData = async (req, res, nameData) => {
    try {
        const data = await nameData.findAll();
        res.send(data);
    }
    catch(err) {
        console.log(err);
        res.status(500).send('Server Error')
    }
}

const getDataById = async (req, res, nameData, idSelect) => {
    try {
        const dataSelector = await nameData.findAll(
            {
                where : {id: idSelect}
            }
        )
        res.send(dataSelector);
    }
    catch(err) {
        console,log(err);
        res.status(500).send('Server Error');
    }
}

const getDataLimit = async(req, res, nameData, limit, offset) => {
    const dataSelector = await nameData.findAll(
        {
            offset: parseInt(offset), 
            limit: parseInt(limit)
        }
    )
    res.send(dataSelector)
}

const addData = async(req, res, nameData, newData) => {
    try {
        await nameData.create(newData);
        res.send("Create successfully");
    }
    catch(err) {
        console.log(err);
        res.status(500).send('Server Error')
    }
}

const updateData = async(req, res, nameData, dataUpdate, idUpdate) => {
    try {
        await nameData.update(dataUpdate,
            {
                where : {id: idUpdate}
            }
        );
        res.send("Update Successfully");
    }
    catch(err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
}

const deleteData = async(req, res, nameData, idDelete) => {
    try {
        await nameData.destroy(
            {
                where: {id: idDelete}
            }
        )
        res.send("Delete Successfully");
    }
    catch(err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
}

module.exports = {getData, getDataById, getDataLimit, addData, updateData, deleteData}