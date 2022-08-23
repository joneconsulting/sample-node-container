module.exports = (function () {
    return {
        local: {           
            host: 'localhost',            
            port: '13306',            
            user: 'root',            
            password: 'test1357',            
            database: 'nodedb'        
        },        
        docker: {            
            host: 'mariadb',            
            port: '3306',            
            user: 'root',            
            password: 'test1357',            
            database: 'nodedb'    
        },
        staging: {            
            host: '',            
            port: '',            
            user: '',            
            password: '',            
            database: ''        
        },        
        dev: {            
            host: '',            
            port: '',            
            user: '',            
            password: '',            
            database: ''        
        }    
    }
})();