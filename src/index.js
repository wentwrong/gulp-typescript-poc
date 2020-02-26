import { join } from 'path';

export default function hello() { 
    console.log(join('It is', 'just for import'));
}

if (require.main === module) {
    hello();
}