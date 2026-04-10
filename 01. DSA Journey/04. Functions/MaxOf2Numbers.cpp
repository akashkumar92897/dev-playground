#include <iostream>
using namespace std;

int maxOfTwo(int a, int b){
    if (a>b){
        cout << "a is maximum: ";
        return a;
    }else if(b>a){
        cout << "b is maximum: ";
        return b;
    }else{
        cout << "a and b are equal: ";
        return a;
        return b;
    }
}

int main () {
    int a = 9;
    int b = 7;

    cout << maxOfTwo(a,b);

    return 0;
}