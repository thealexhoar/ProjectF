function hasParams(object, params) {
    const keys = Object.keys(object)
    for (val in params) {
        const nextParam = params[val]
        if (keys.indexOf(nextParam) < 0) {
            return false
        }
    }
    return true
}

function checkParamType(param, value) {
    switch(param) {
        case 'animalId':
            checkId(param, value)
            break
        case 'applicationId':
            checkId(param, value)
            break
        case 'birthdate':
            checkBirthdate(value)
            break
        case 'emailId':
            checkGenericString(param, value)
            break
        case 'imgUrl':
            checkGenericString(param, value)
            break
        case 'name':
            checkGenericString(name, value)
            break
        case 'phone':
            checkPhone(value)
            break
        case 'specialNeeds':
            checkGenericString(param, value)
            break
        case 'staffId':
            checkId(param, value)
            break
        case 'userType':
            checkUserType(value)
            break
        default:
            throw Error(`Internal error: Parameter ${param} is unknown!`)
    }
}

function checkBirthdate(val) {
    //TODO: check birthdates
}

function checkGenericString(param, val) {
    // I'm not going to be terribly strict about some strings
    // it's not worth the headache
    if (typeof(val) !== typeof('string')) {
        throw Error(`Parameter ${param} must be a string!`)
    }
}

function checkId(param, val) {
    if (val.match(/^[0-9]+$/) === null) {
        throw new Error(`Parameter ${param} must be a number!`)
    }
}

function checkPhone(val) {
    if (typeof(val) !== typeof('string')) {
        throw Error(`Parameter phone must be a string!`)
    }
    if (val.length !== 10 || val.match(/^[0-9]+$/) === null) {
        throw Error(`Parameter phone must be a 10-digit number!`)
    }
}

function checkSex(val) {
    if (val !== 'male' && val !== 'female') {
        throw Error(`Parameter sex must have value "male" or "female"`)
    }
}

function checkUserType(val) {
    if (val !== 'applicant' && val !== 'staff') {
        throw Error(`Parameter userType must have value "applicant" or "staff"`)
    }
}

function checkWeight(val) {
    if (val.match(/^[0-9]+$/) === null) {
        throw Error(`Parameter weight must be a number!`)
    }
    if (parseInt(val) <= 0 || parseInt(val) >= 250) {
        throw Error(`Parameter weight must be reasonable (1-250)!`)
    }
}



module.exports = 
{
    testParams: (object, params) => {
        if (!hasParams(object, params)) {
            throw Error(`The body does not have all parameters: ${params}`)
        }
        params.forEach(param => {
            checkParamType(param, object[param])
        })
    },
    testParamsLazy: (object, params) => {
        params.forEach(param => {
            if (object[param]) {
                checkParamType(param, object[param])
            }
        })
    }
}
