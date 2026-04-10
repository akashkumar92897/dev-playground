#include <iostream>
using namespace std;

// void changeA (int a){ //pass by value
//     a = 20;
// }

// void changeA (int* ptr){ //pass by reference using pointers
//     *ptr = 20;           //dereference operator to access value at the address of a
// }

void changeA (int &b){ //pass by reference using alias
    b = 20;
}

int main (){
    int a = 10;
    // changeA(a); //pass by value

    changeA(a);

    cout << "Inside main fxn : " << a << endl;
    
    return 0;
}