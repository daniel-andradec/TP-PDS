export default {
    state: {
        customers: [
            {
                id: 1,
                name: 'John Doe',
                birthDate: '05/11/2002',
                cpf: '12345678910',
                email: 'john@doe.com',
                phone: '12345678910',
                street: 'Rua 1',
                number: '123',
                complement: 'Casa',
                neighborhood: 'Bairro 1',
                city: 'Cidade 1',
                state: 'MG',
                cep: '12345678'
            },
            {
                id: 2,
                name: 'Jane Smith',
                birthDate: '12/03/1990',
                cpf: '98765432100',
                email: 'jane@smith.com',
                phone: '98765432100',
                street: 'Avenida 2',
                number: '456',
                complement: 'Apartamento 3A',
                neighborhood: 'Bairro 2',
                city: 'Cidade 2',
                state: 'SP',
                cep: '87654321'
            },
            {
                id: 3,
                name: 'Robert Johnson',
                birthDate: '25/07/1985',
                cpf: '56789012345',
                email: 'robert@johnson.com',
                phone: '56789012345',
                street: 'Rua 3',
                number: '789',
                complement: 'Casa 5',
                neighborhood: 'Bairro 3',
                city: 'Cidade 3',
                state: 'RJ',
                cep: '34567890'
            },
            {
                id: 4,
                name: 'Emily Davis',
                birthDate: '10/09/1995',
                cpf: '34567890123',
                email: 'emily@davis.com',
                phone: '34567890123',
                street: 'Avenida 4',
                number: '1011',
                complement: 'Casa 2B',
                neighborhood: 'Bairro 4',
                city: 'Cidade 4',
                state: 'RS',
                cep: '23456789'
            },
            {
                id: 5,
                name: 'Michael Wilson',
                birthDate: '15/12/1980',
                cpf: '65432109876',
                email: 'michael@wilson.com',
                phone: '65432109876',
                street: 'Rua 5',
                number: '567',
                complement: 'Apartamento 10C',
                neighborhood: 'Bairro 5',
                city: 'Cidade 5',
                state: 'BA',
                cep: '45678901'
            },
            {
                id: 6,
                name: 'Olivia Brown',
                birthDate: '20/02/1998',
                cpf: '45678901234',
                email: 'olivia@brown.com',
                phone: '45678901234',
                street: 'Avenida 6',
                number: '891',
                complement: 'Casa 3D',
                neighborhood: 'Bairro 6',
                city: 'Cidade 6',
                state: 'PE',
                cep: '34567812'
            },
            {
                id: 7,
                name: 'William Lee',
                birthDate: '08/06/1987',
                cpf: '78901234567',
                email: 'william@lee.com',
                phone: '78901234567',
                street: 'Rua 7',
                number: '1213',
                complement: 'Apartamento 6E',
                neighborhood: 'Bairro 7',
                city: 'Cidade 7',
                state: 'CE',
                cep: '56789123'
            },
            {
                id: 8,
                name: 'Sophia Taylor',
                birthDate: '30/04/1992',
                cpf: '89012345678',
                email: 'sophia@taylor.com',
                phone: '89012345678',
                street: 'Avenida 8',
                number: '1415',
                complement: 'Casa 4F',
                neighborhood: 'Bairro 8',
                city: 'Cidade 8',
                state: 'AM',
                cep: '67891234'
            },
            {
                id: 9,
                name: 'James Anderson',
                birthDate: '17/11/1983',
                cpf: '90123456789',
                email: 'james@anderson.com',
                phone: '90123456789',
                street: 'Rua 9',
                number: '1617',
                complement: 'Casa 5G',
                neighborhood: 'Bairro 9',
                city: 'Cidade 9',
                state: 'PA',
                cep: '78912345'
            },
            {
                id: 10,
                name: 'Ava Martinez',
                birthDate: '02/01/1996',
                cpf: '01234567890',
                email: 'ava@martinez.com',
                phone: '01234567890',
                street: 'Avenida 10',
                number: '1819',
                complement: 'Apartamento 7H',
                neighborhood: 'Bairro 10',
                city: 'Cidade 10',
                state: 'DF',
                cep: '89123456'
            }
        ],
        vendors: [
            {
                id: 1,
                companyName: 'Loja 1',
                fantasyName: 'Loja 1',
                cnpj: '12345678910111',
                email: 'loja1@loja1.com',
                phone: '12345678910',
                street: 'Rua 1',
                number: '123',
                complement: 'Casa',
                neighborhood: 'Bairro 1',
                city: 'Cidade 1',
                state: 'MG',
                cep: '12345678',
                devolutionPolicy: 'Política de devolução 1'
            },
            {
                id: 2,
                companyName: 'Loja 2',
                fantasyName: 'Loja 2',
                cnpj: '98765432101122',
                email: 'loja2@loja2.com',
                phone: '98765432101',
                street: 'Avenida 2',
                number: '456',
                complement: 'Apartamento 3A',
                neighborhood: 'Bairro 2',
                city: 'Cidade 2',
                state: 'SP',
                cep: '87654321',
                devolutionPolicy: 'Política de devolução 2'
            },
            {
                id: 3,
                companyName: 'Loja 3',
                fantasyName: 'Loja 3',
                cnpj: '45678901211333',
                email: 'loja3@loja3.com',
                phone: '45678901211',
                street: 'Rua 3',
                number: '789',
                complement: 'Casa 5',
                neighborhood: 'Bairro 3',
                city: 'Cidade 3',
                state: 'RJ',
                cep: '34567890',
                devolutionPolicy: 'Política de devolução 3'
            },
            {
                id: 4,
                companyName: 'Loja 4',
                fantasyName: 'Loja 4',
                cnpj: '34567890112244',
                email: 'loja4@loja4.com',
                phone: '34567890112',
                street: 'Avenida 4',
                number: '1011',
                complement: 'Casa 2B',
                neighborhood: 'Bairro 4',
                city: 'Cidade 4',
                state: 'RS',
                cep: '23456789',
                devolutionPolicy: 'Política de devolução 4'
            },
            {
                id: 5,
                companyName: 'Loja 5',
                fantasyName: 'Loja 5',
                cnpj: '65432101122555',
                email: 'loja5@loja5.com',
                phone: '65432101122',
                street: 'Rua 5',
                number: '567',
                complement: 'Apartamento 10C',
                neighborhood: 'Bairro 5',
                city: 'Cidade 5',
                state: 'BA',
                cep: '45678901',
                devolutionPolicy: 'Política de devolução 5'
            },
            {
                id: 6,
                companyName: 'Loja 6',
                fantasyName: 'Loja 6',
                cnpj: '45678901222666',
                email: 'loja6@loja6.com',
                phone: '45678901222',
                street: 'Avenida 6',
                number: '891',
                complement: 'Casa 3D',
                neighborhood: 'Bairro 6',
                city: 'Cidade 6',
                state: 'PE',
                cep: '34567812',
                devolutionPolicy: 'Política de devolução 6'
            },
            {
                id: 7,
                companyName: 'Loja 7',
                fantasyName: 'Loja 7',
                cnpj: '78901211227777',
                email: 'loja7@loja7.com',
                phone: '78901211227',
                street: 'Rua 7',
                number: '1213',
                complement: 'Apartamento 6E',
                neighborhood: 'Bairro 7',
                city: 'Cidade 7',
                state: 'CE',
                cep: '56789123',
                devolutionPolicy: 'Política de devolução 7'
            },
            {
                id: 8,
                companyName: 'Loja 8',
                fantasyName: 'Loja 8',
                cnpj: '89012112228888',
                email: 'loja8@loja8.com',
                phone: '89012112228',
                street: 'Avenida 8',
                number: '1415',
                complement: 'Casa 4F',
                neighborhood: 'Bairro 8',
                city: 'Cidade 8',
                state: 'AM',
                cep: '67891234',
                devolutionPolicy: 'Política de devolução 8'
            },
            {
                id: 9,
                companyName: 'Loja 9',
                fantasyName: 'Loja 9',
                cnpj: '90121122889999',
                email: 'loja9@loja9.com',
                phone: '90121122899',
                street: 'Rua 9',
                number: '1617',
                complement: 'Casa 5G',
                neighborhood: 'Bairro 9',
                city: 'Cidade 9',
                state: 'PA',
                cep: '78912345',
                devolutionPolicy: 'Política de devolução 9'
            },
            {
                id: 10,
                companyName: 'Loja 10',
                fantasyName: 'Loja 10',
                cnpj: '01212228880000',
                email: 'loja10@loja10.com',
                phone: '01212228800',
                street: 'Avenida 10',
                number: '1819',
                complement: 'Apartamento 7H',
                neighborhood: 'Bairro 10',
                city: 'Cidade 10',
                state: 'DF',
                cep: '89123456',
                devolutionPolicy: 'Política de devolução 10'
            },
        ]        
    },
    mutations: {},
    actions: {},
    getters: {
        getCustomers: state => state.customers,
        getVendors: state => state.vendors
    }
}