module.exports = {
    bimestreUm(req, res){
        const boletim = [
            {        
                disciplina: 'Português',
                nota: 8,
                faltas: 1,
                participacao: 95
            },
            {
                disciplina: 'Matemática',
                nota: 10,
                faltas: 0,
                participacao: 100
            },
            {
                disciplina: 'História',
                nota: 7.5,
                faltas: 1,
                participacao: 97
            },
            {
                disciplina: 'Geografia',
                nota: 9,
                faltas: 0,
                participacao: 98
            },
            {
                disciplina: 'Ciências',
                nota: 10,
                faltas: 0,
                participacao: 98
            },
            {
                disciplina: 'Física',
                nota: 10,
                faltas: 0,
                participacao: 100
            },
            {
                disciplina: 'Química',
                nota: 9,
                faltas: 0,
                participacao: 98
            },
            {
                disciplina: 'Biologia',
                nota: 7,
                faltas: 2,
                participacao: 95
            },
            {
                disciplina: 'Inglês',
                nota: 10,
                faltas: 0,
                participacao: 99
            },
            {
                disciplina: 'Artes',
                nota: 6,
                faltas: 3,
                participacao: 90
            },
            {
                disciplina: 'Educação Física',
                nota: 7,
                faltas: 2,
                participacao: 91
            }
        ]
        return res.render('student', { boletim })
    },
    bimestreDois(req, res){
        const boletim = [
            {        
                disciplina: 'Português',
                nota: 7,
                faltas: 2,
                participacao: 90
            },
            {
                disciplina: 'Matemática',
                nota: 9.5,
                faltas: 1,
                participacao: 99
            },
            {
                disciplina: 'História',
                nota: 7,
                faltas: 0,
                participacao: 90
            },
            {
                disciplina: 'Geografia',
                nota: 8,
                faltas: 3,
                participacao: 90
            }
        ]
        return res.render('student', { boletim })
    },
    bimestreTres(req, res){
        const boletim = [
            {        
                disciplina: 'Português',
                nota: 9,
                faltas: 1,
                participacao: 92
            },
            {
                disciplina: 'Matemática',
                nota: 9.5,
                faltas: 1,
                participacao: 99
            },
            {
                disciplina: 'História',
                nota: 7,
                faltas: 0,
                participacao: 90
            },
            {
                disciplina: 'Geografia',
                nota: 8,
                faltas: 3,
                participacao: 90
            }
        ]
        return res.render('student', { boletim })
    },
    bimestreQuatro(req, res){
        const boletim = [
            {        
                disciplina: 'Português',
                nota: 8.5,
                faltas: 0,
                participacao: 97
            },
            {
                disciplina: 'Matemática',
                nota: 9.5,
                faltas: 1,
                participacao: 99
            },
            {
                disciplina: 'História',
                nota: 7,
                faltas: 0,
                participacao: 90
            },
            {
                disciplina: 'Geografia',
                nota: 8,
                faltas: 3,
                participacao: 90
            }
        ]
        return res.render('student', { boletim })
    }
}
