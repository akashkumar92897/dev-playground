#include <iostream>
using namespace std;
int main (){
    int a = 10;
    int* ptr = &a;

    cout << "Address of a: " << &a << endl;
    cout << "Value of ptr: " << ptr << endl;

    //Both the values must be equal.
    return 0;
}