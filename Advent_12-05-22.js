const data_dict = {
    val: `move 2 from 7 to 2
    move 1 from 4 to 8
    move 2 from 1 to 9
    move 4 from 6 to 5
    move 1 from 7 to 6
    move 2 from 1 to 4
    move 7 from 8 to 9
    move 7 from 4 to 5
    move 4 from 2 to 4
    move 1 from 5 to 9
    move 14 from 5 to 4
    move 1 from 3 to 8
    move 5 from 4 to 8
    move 1 from 2 to 5
    move 2 from 4 to 1
    move 6 from 8 to 1
    move 1 from 8 to 6
    move 1 from 2 to 5
    move 5 from 3 to 7
    move 2 from 6 to 3
    move 2 from 4 to 7
    move 3 from 3 to 9
    move 7 from 4 to 1
    move 1 from 6 to 9
    move 2 from 6 to 1
    move 3 from 5 to 2
    move 1 from 1 to 8
    move 21 from 9 to 1
    move 1 from 4 to 2
    move 7 from 7 to 2
    move 1 from 4 to 2
    move 23 from 1 to 5
    move 5 from 5 to 1
    move 1 from 3 to 6
    move 1 from 6 to 3
    move 12 from 1 to 6
    move 1 from 3 to 6
    move 2 from 1 to 8
    move 1 from 9 to 3
    move 2 from 8 to 1
    move 2 from 1 to 8
    move 1 from 1 to 3
    move 2 from 3 to 1
    move 2 from 8 to 1
    move 3 from 6 to 1
    move 1 from 8 to 7
    move 4 from 6 to 2
    move 3 from 6 to 9
    move 2 from 5 to 7
    move 2 from 7 to 8
    move 1 from 7 to 9
    move 9 from 1 to 5
    move 12 from 5 to 9
    move 1 from 8 to 6
    move 1 from 6 to 9
    move 1 from 6 to 9
    move 7 from 9 to 4
    move 10 from 2 to 1
    move 12 from 5 to 4
    move 7 from 4 to 9
    move 7 from 4 to 7
    move 1 from 5 to 4
    move 7 from 7 to 8
    move 1 from 6 to 3
    move 1 from 3 to 1
    move 3 from 2 to 4
    move 1 from 6 to 8
    move 7 from 1 to 2
    move 1 from 6 to 7
    move 12 from 9 to 4
    move 3 from 8 to 5
    move 1 from 7 to 3
    move 6 from 9 to 1
    move 10 from 1 to 9
    move 7 from 9 to 5
    move 3 from 9 to 5
    move 1 from 3 to 4
    move 2 from 2 to 1
    move 1 from 5 to 1
    move 9 from 4 to 3
    move 1 from 1 to 3
    move 8 from 4 to 7
    move 7 from 5 to 3
    move 2 from 7 to 2
    move 8 from 3 to 9
    move 1 from 1 to 8
    move 10 from 2 to 3
    move 4 from 8 to 7
    move 12 from 3 to 4
    move 9 from 7 to 2
    move 2 from 1 to 3
    move 1 from 9 to 6
    move 2 from 4 to 9
    move 1 from 7 to 6
    move 5 from 5 to 9
    move 8 from 3 to 1
    move 2 from 6 to 3
    move 14 from 4 to 3
    move 15 from 3 to 9
    move 1 from 3 to 1
    move 3 from 9 to 8
    move 1 from 8 to 1
    move 1 from 3 to 2
    move 5 from 2 to 8
    move 1 from 4 to 2
    move 2 from 1 to 3
    move 2 from 3 to 9
    move 3 from 2 to 4
    move 6 from 1 to 8
    move 2 from 2 to 6
    move 1 from 6 to 4
    move 2 from 4 to 7
    move 5 from 8 to 5
    move 1 from 6 to 9
    move 7 from 9 to 6
    move 1 from 5 to 3
    move 2 from 7 to 8
    move 2 from 2 to 4
    move 3 from 5 to 6
    move 1 from 3 to 8
    move 1 from 5 to 6
    move 2 from 4 to 1
    move 3 from 1 to 6
    move 21 from 9 to 5
    move 1 from 4 to 3
    move 1 from 4 to 9
    move 2 from 9 to 2
    move 1 from 3 to 9
    move 4 from 2 to 3
    move 3 from 8 to 1
    move 14 from 5 to 9
    move 7 from 5 to 4
    move 3 from 8 to 4
    move 4 from 3 to 2
    move 3 from 8 to 5
    move 1 from 2 to 3
    move 1 from 5 to 1
    move 2 from 5 to 4
    move 3 from 2 to 9
    move 11 from 4 to 1
    move 17 from 9 to 2
    move 17 from 2 to 9
    move 10 from 9 to 2
    move 2 from 8 to 2
    move 3 from 8 to 3
    move 8 from 9 to 7
    move 4 from 7 to 3
    move 2 from 3 to 2
    move 3 from 2 to 3
    move 9 from 3 to 5
    move 1 from 1 to 9
    move 8 from 5 to 1
    move 2 from 7 to 9
    move 24 from 1 to 3
    move 24 from 3 to 6
    move 1 from 5 to 3
    move 10 from 2 to 1
    move 1 from 4 to 5
    move 3 from 9 to 1
    move 1 from 3 to 5
    move 17 from 6 to 5
    move 1 from 7 to 4
    move 13 from 5 to 4
    move 3 from 5 to 8
    move 1 from 7 to 9
    move 3 from 6 to 9
    move 8 from 6 to 4
    move 1 from 9 to 6
    move 11 from 1 to 8
    move 1 from 5 to 6
    move 12 from 4 to 9
    move 2 from 5 to 1
    move 1 from 1 to 7
    move 5 from 9 to 2
    move 1 from 7 to 9
    move 3 from 1 to 5
    move 3 from 5 to 9
    move 7 from 9 to 3
    move 4 from 9 to 6
    move 3 from 6 to 8
    move 5 from 4 to 3
    move 2 from 2 to 6
    move 3 from 9 to 3
    move 3 from 6 to 4
    move 4 from 2 to 6
    move 11 from 3 to 5
    move 11 from 6 to 9
    move 2 from 3 to 5
    move 1 from 5 to 8
    move 3 from 6 to 2
    move 7 from 9 to 2
    move 8 from 5 to 7
    move 6 from 4 to 5
    move 2 from 4 to 3
    move 1 from 8 to 6
    move 4 from 8 to 3
    move 13 from 8 to 3
    move 1 from 9 to 5
    move 6 from 7 to 2
    move 1 from 7 to 6
    move 1 from 6 to 5
    move 2 from 6 to 7
    move 13 from 3 to 5
    move 6 from 2 to 7
    move 1 from 6 to 1
    move 1 from 2 to 8
    move 2 from 7 to 8
    move 14 from 5 to 8
    move 1 from 1 to 4
    move 9 from 2 to 1
    move 14 from 8 to 7
    move 3 from 3 to 9
    move 11 from 5 to 3
    move 1 from 4 to 5
    move 4 from 9 to 8
    move 4 from 8 to 7
    move 5 from 3 to 9
    move 11 from 7 to 8
    move 9 from 1 to 3
    move 4 from 3 to 2
    move 6 from 8 to 4
    move 2 from 8 to 2
    move 13 from 3 to 6
    move 1 from 4 to 1
    move 5 from 4 to 2
    move 10 from 2 to 6
    move 4 from 9 to 1
    move 8 from 7 to 8
    move 10 from 8 to 5
    move 2 from 3 to 2
    move 2 from 8 to 6
    move 1 from 7 to 1
    move 2 from 7 to 6
    move 2 from 2 to 9
    move 2 from 8 to 6
    move 6 from 1 to 7
    move 5 from 9 to 1
    move 4 from 7 to 8
    move 1 from 7 to 2
    move 2 from 1 to 7
    move 1 from 3 to 8
    move 1 from 1 to 6
    move 2 from 2 to 6
    move 1 from 7 to 8
    move 1 from 1 to 9
    move 8 from 5 to 7
    move 2 from 7 to 9
    move 9 from 6 to 3
    move 13 from 6 to 8
    move 3 from 9 to 1
    move 5 from 6 to 1
    move 3 from 8 to 1
    move 3 from 3 to 4
    move 1 from 4 to 3
    move 1 from 4 to 8
    move 4 from 6 to 3
    move 11 from 8 to 2
    move 1 from 6 to 9
    move 8 from 3 to 9
    move 3 from 5 to 8
    move 4 from 1 to 2
    move 6 from 8 to 5
    move 6 from 5 to 1
    move 5 from 1 to 3
    move 3 from 3 to 4
    move 3 from 8 to 4
    move 2 from 4 to 5
    move 10 from 7 to 8
    move 5 from 9 to 2
    move 1 from 7 to 5
    move 3 from 5 to 2
    move 4 from 9 to 3
    move 4 from 1 to 5
    move 1 from 3 to 2
    move 3 from 5 to 2
    move 6 from 2 to 5
    move 10 from 8 to 3
    move 4 from 4 to 5
    move 4 from 2 to 8
    move 12 from 3 to 8
    move 1 from 1 to 3
    move 9 from 8 to 6
    move 1 from 4 to 1
    move 6 from 8 to 7
    move 3 from 1 to 7
    move 9 from 5 to 7
    move 11 from 7 to 2
    move 2 from 7 to 3
    move 9 from 2 to 7
    move 1 from 8 to 7
    move 1 from 5 to 2
    move 2 from 6 to 2
    move 2 from 1 to 2
    move 6 from 3 to 5
    move 2 from 3 to 6
    move 4 from 7 to 3
    move 3 from 3 to 1
    move 2 from 1 to 5
    move 7 from 7 to 6
    move 1 from 1 to 5
    move 3 from 2 to 4
    move 1 from 3 to 2
    move 18 from 2 to 1
    move 4 from 2 to 7
    move 6 from 5 to 9
    move 1 from 4 to 8
    move 2 from 6 to 1
    move 19 from 1 to 2
    move 4 from 9 to 5
    move 5 from 7 to 2
    move 1 from 8 to 7
    move 1 from 1 to 2
    move 6 from 5 to 7
    move 1 from 3 to 8
    move 6 from 7 to 6
    move 1 from 4 to 1
    move 4 from 7 to 9
    move 1 from 1 to 3
    move 1 from 2 to 5
    move 1 from 4 to 8
    move 1 from 3 to 4
    move 3 from 5 to 4
    move 2 from 8 to 9
    move 9 from 2 to 4
    move 19 from 6 to 4
    move 1 from 4 to 7
    move 5 from 9 to 5
    move 10 from 2 to 9
    move 2 from 5 to 4
    move 14 from 4 to 7
    move 2 from 2 to 1
    move 3 from 9 to 1
    move 1 from 1 to 3
    move 13 from 7 to 6
    move 1 from 5 to 9
    move 1 from 6 to 9
    move 1 from 7 to 2
    move 5 from 9 to 7
    move 1 from 5 to 2
    move 3 from 7 to 3
    move 3 from 4 to 9
    move 1 from 5 to 2
    move 4 from 4 to 2
    move 2 from 7 to 3
    move 4 from 1 to 6
    move 1 from 7 to 9
    move 11 from 9 to 5
    move 8 from 2 to 9
    move 6 from 9 to 6
    move 8 from 4 to 5
    move 14 from 5 to 6
    move 1 from 5 to 4
    move 3 from 5 to 1
    move 1 from 5 to 2
    move 2 from 6 to 4
    move 2 from 4 to 2
    move 1 from 9 to 2
    move 1 from 2 to 3
    move 1 from 9 to 3
    move 3 from 2 to 7
    move 7 from 6 to 7
    move 5 from 4 to 3
    move 23 from 6 to 1
    move 5 from 7 to 2
    move 22 from 1 to 6
    move 6 from 6 to 3
    move 6 from 2 to 4
    move 6 from 4 to 1
    move 3 from 7 to 8
    move 3 from 1 to 8
    move 4 from 3 to 2
    move 1 from 1 to 3
    move 3 from 3 to 1
    move 1 from 7 to 5
    move 1 from 6 to 5
    move 1 from 7 to 4
    move 4 from 6 to 9
    move 5 from 3 to 6
    move 2 from 2 to 1
    move 3 from 9 to 4
    move 11 from 1 to 9
    move 2 from 4 to 7
    move 4 from 6 to 1
    move 1 from 5 to 4
    move 5 from 8 to 9
    move 1 from 7 to 1
    move 3 from 2 to 7
    move 4 from 1 to 2
    move 3 from 4 to 2
    move 1 from 8 to 5
    move 1 from 5 to 4
    move 1 from 5 to 4
    move 5 from 6 to 1
    move 3 from 7 to 6
    move 5 from 2 to 8
    move 15 from 9 to 2
    move 1 from 3 to 9
    move 10 from 6 to 8
    move 1 from 4 to 9
    move 1 from 8 to 3
    move 1 from 4 to 6
    move 4 from 6 to 3
    move 2 from 9 to 7
    move 1 from 7 to 6
    move 1 from 1 to 6
    move 3 from 3 to 8
    move 2 from 7 to 8
    move 3 from 8 to 4
    move 12 from 2 to 9
    move 14 from 9 to 5
    move 12 from 8 to 2
    move 1 from 6 to 7
    move 8 from 3 to 1
    move 2 from 4 to 6
    move 1 from 3 to 6
    move 5 from 6 to 1
    move 17 from 1 to 2
    move 29 from 2 to 1
    move 1 from 8 to 5
    move 1 from 4 to 3
    move 1 from 8 to 5
    move 1 from 8 to 7
    move 5 from 2 to 1
    move 1 from 3 to 5
    move 1 from 6 to 4
    move 6 from 5 to 8
    move 1 from 4 to 9
    move 1 from 7 to 2
    move 1 from 2 to 6
    move 7 from 8 to 7
    move 1 from 6 to 9
    move 2 from 9 to 2
    move 2 from 2 to 8
    move 15 from 1 to 2
    move 2 from 8 to 3
    move 9 from 1 to 2
    move 24 from 2 to 7
    move 11 from 1 to 2
    move 1 from 3 to 1
    move 22 from 7 to 6
    move 6 from 5 to 2
    move 2 from 6 to 5
    move 1 from 1 to 9
    move 1 from 9 to 6
    move 6 from 5 to 1
    move 12 from 6 to 2
    move 3 from 1 to 5
    move 1 from 3 to 2
    move 25 from 2 to 6
    move 4 from 7 to 5
    move 8 from 5 to 4
    move 4 from 4 to 8
    move 1 from 1 to 8
    move 5 from 8 to 4
    move 4 from 4 to 1
    move 2 from 1 to 9
    move 20 from 6 to 8
    move 4 from 2 to 6
    move 19 from 8 to 7
    move 2 from 9 to 3
    move 1 from 8 to 2
    move 11 from 6 to 7
    move 3 from 1 to 2
    move 5 from 4 to 3
    move 1 from 1 to 3
    move 1 from 3 to 5
    move 2 from 2 to 8
    move 33 from 7 to 3
    move 1 from 5 to 3
    move 1 from 8 to 7
    move 1 from 7 to 4
    move 5 from 6 to 8
    move 2 from 7 to 6
    move 2 from 2 to 3
    move 1 from 2 to 5
    move 1 from 7 to 9
    move 1 from 5 to 7
    move 1 from 8 to 2
    move 1 from 4 to 3
    move 43 from 3 to 7
    move 1 from 3 to 8
    move 1 from 6 to 8
    move 8 from 7 to 5
    move 3 from 5 to 3
    move 1 from 6 to 4
    move 2 from 6 to 7
    move 4 from 8 to 7
    move 3 from 3 to 2
    move 1 from 9 to 6
    move 3 from 8 to 3
    move 1 from 6 to 7
    move 1 from 4 to 6
    move 1 from 3 to 7
    move 1 from 3 to 2
    move 5 from 2 to 5
    move 1 from 6 to 1
    move 1 from 3 to 2
    move 42 from 7 to 5
    move 44 from 5 to 4
    move 2 from 5 to 8
    move 1 from 7 to 3
    move 16 from 4 to 6
    move 3 from 5 to 9`
}

// const data_dict = {
//     val: `move 1 from 2 to 1
//     move 3 from 1 to 3
//     move 2 from 2 to 1
//     move 1 from 1 to 2`
// }

const input = data_dict.val.split('\n');

const initial_data = [
    'DZTH',
    'SCGTWRQ',
    'HCRNQFBP',
    'ZHFNCL',
    'SQFLG',
    'SCRBZWPV',
    'JFZ',
    'QHRZVLD',
    'DLZFNGHB'
]


// const initial_data = [
//     'NZ','DCM','P'
// ]
const initial = initial_data.map(x => x.split('').reverse())

// console.log('og initial', initial,'\n\n')

function performMove(move){
    const pieces = move.trim().split(' ');
    const [howMany, from, to] = [ Number(pieces[1]), Number(pieces[3]), Number(pieces[5]) ];
    initial[to-1].push(
        ...initial[from-1].splice(-howMany).reverse()
    );
}

function performMove_part2(move){
    const pieces = move.trim().split(' ');
    const [howMany, from, to] = [ Number(pieces[1]), Number(pieces[3]), Number(pieces[5]) ];
    initial[to-1].push(
        ...initial[from-1].splice(-howMany)
    );

    //The literal only difference is the there is no .reverse
}

function part1(){

    for(const move of input){
        performMove(move);
    }

    let res = '';
    for(const stack of initial){
        res += stack.slice(-1);
    }

    return res;
}

function part2(){
    for(const move of input){
        performMove_part2(move);
    }

    let res = '';
    for(const stack of initial){
        res += stack.slice(-1);
    }

    return res;
}


console.log(part2())
