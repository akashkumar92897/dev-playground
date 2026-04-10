#include <iostream>
using namespace std;
int main (){
    int arr[] = {1, 2, 3, 4, 5};

    cout << arr << endl; //Pointer
    cout << *arr << endl; //points at address of 0th index -> 1

    int a = 15;
    // arr = &a; --> arr can't be modified because it is a constant pointer inside C++
    return 0;
}