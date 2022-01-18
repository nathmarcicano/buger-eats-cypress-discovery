var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()


        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '21992087652',
            address: {
                postalcode: '22735080',
                street: 'Rua Virgínia Vidal',
                number: '112',
                details: 'casa 3',
                district: 'Tanque',
                city_state: 'Rio de Janeiro/RJ'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}