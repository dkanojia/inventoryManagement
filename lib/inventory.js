const inquirer = require('inquirer');

module.exports = {
  inputOfInv: () => {
    const argument = [
      {
        name: 'pur_contr',
        type: 'input',
        message: 'Enter pur cont',
        
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter value.';
          }
        }
      },
      {
        name: 'p_no',
        type: 'input',
        message: 'Enter your string:',
        validate: function(value) {
          if (value.length) {
            var uRegex = new RegExp("^[B][0-9]{3}[A-Z]{2}[0-9]{7}$");

            var gRegex = new RegExp("^[A][A-Z]{2}[0-9]{9}$");
            
            if (uRegex.test(value)) {
                return true
            }else if (gRegex.test(value)){
                return true;
            }else{
                return "Please enter correct value"
            }

          } else {
            return 'Please enter your string.';
          }
        },
      },
      {
        name: 'm_pd_qt',
        type: 'input',
        message: 'Enter m pd qt',
        
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter value.';
          }
        }
      },
      {
        name: 'g_pd_qt',
        type: 'input',
        message: 'Enter 2 g pd qt',
        
        validate: function( value ) {
          if (value.length) {
            return true;
          } else {
            return 'Please enter value.';
          }
        }
      },
    ];

    return inquirer.prompt(argument);
  }
};