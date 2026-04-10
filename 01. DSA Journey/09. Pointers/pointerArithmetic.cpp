#include <iostream>
using namespace std;
int main (){
    int a = 10;
    int* ptr = &a;

    //Increment / Decrement Operator
    cout << ptr << endl;
    ptr++;
    cout << ptr << endl;
    ptr--;
    cout << ptr << endl;

    //Add / Subtract Numbers
    int b = 15;
    int* ptr2 = &b;

    cout << ptr2 << endl;
    ptr2 += 2;
    cout << ptr2 << endl;
    ptr2 -= 1;
    cout << ptr2 << endl;


    //Subtraction of Pointer 
    int* point1;  //100
    int* point2 = point1 + 2;  //108
    cout << point2 - point1 << endl; //8 byte = 2


    //Comparison of Pointers
    int* pnt1;
    int* pnt2;

    cout << pnt1 << endl;
    cout << pnt2 << endl;

    cout << (pnt1 == pnt2) << endl;
    cout << (pnt1 != pnt2) << endl;
    cout << (pnt1 >= pnt2) << endl;
    cout << (pnt1 > pnt2) << endl;
    cout << (pnt1 <= pnt2) << endl;
    cout << (pnt1 < pnt2) << endl;
    return 0;
}