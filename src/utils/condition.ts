export function condition(condition: string){
    switch(condition) {
        case 'storm': 
         return {name: "'rainly-outline'", color: '#1ec9ff'};

        case 'clear_day': 
         return {name: "'partly-sunny-outline'", color: '#FFB300'};

        case 'rain':
         return {name: "'rainly-outline'", color: '#1ec9ff'}
        
        default:
            return {name: "'cloud-outline'", color: '#1ec9ff'}
    }
}