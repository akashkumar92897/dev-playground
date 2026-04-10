#include <iostream>
using namespace std;
int main(){
    //Initialisation of Array
    int marks[5] = {94, 95, 88, 97, 99};        //With size initialisation

    // double price[] = {99.4, 98.5, 95.6};        //Without size initialisation,  size = no of elements on right side

    //Access array elements using array index
    cout << "---------- Access using Array Index ----------" << endl;
    cout << marks[0] << endl;
    cout << marks[1] << endl;
    cout << marks[2] << endl;
    cout << marks[3] << endl;
    cout << marks[4] << endl;

    //size of array
    cout << "---------- Size of Array  ----------" << endl;
    cout << sizeof(marks) / sizeof(int) << endl;

    //Loop on array
    cout << "---------- Loops on Array  ----------" << endl;
    int size = 5;
    for (int i=0; i<size; i++){
        cout << marks[i] << endl;
    }

    //Input using Loops 
    int size2 = 3;
    int price[size2];
    cout << "---------- Input using Loops on Array  ----------" << endl;
    for (int i=0; i<size2; i++){
        cin >> price[i];
    }
    cout << "---------- Output using Loops on Array  ----------" << endl;
    for (int i=0; i<size2; i++){
        cout << price[i] << endl;
    }
    return 0;
}