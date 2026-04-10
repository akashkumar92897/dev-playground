#include <iostream>
using namespace std;
int main (){
    int a = 10;
    int* ptr = &a;
    int** ptr2 = &ptr;

    //Should be equal to value of a.
    cout << "Value at address of a: " << *(&a) << endl;
    cout << a << endl;
    cout << "Value at address of a which is assigned to ptr: " << *(ptr) << endl;
    cout << "------------------------------------------------------" << endl;
    //---------------------------------------------------------
    cout << "Value at address of ptr which is assigned to ptr2: " << *(ptr2) << endl;
    cout << ptr << endl;
    return 0;
}