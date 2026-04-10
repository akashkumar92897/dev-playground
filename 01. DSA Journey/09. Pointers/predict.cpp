#include <iostream>
using namespace std;
int main (){
    int a = 5;
    int* p = &a;
    int** q = &p;

    cout << *p << endl;   //value of a = 5;
    cout << **q << endl;  //value of a = 5
    cout << p << endl;    //Address of a / value of p
    cout << *q << endl;   //Address of a / value of p
    return 0;
}