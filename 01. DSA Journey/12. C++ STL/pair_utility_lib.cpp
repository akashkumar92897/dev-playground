#include <iostream>
#include <vector>
using namespace std;
int main (){
    //Same type pair
    pair<int, int> p = {2, 3};
    cout << p.first << endl; //2
    cout << p.second << endl; //3

    //Different type pair
    pair <string, int> p2 = {"Akash", 12};
    cout << p2.first << endl; //Akash
    cout << p2.second << endl; //12

    //Nested Pair
    pair <int, pair <int, char>> p3 = {5, {8, 'A'}};
    cout << p3.first << endl; //5
    cout << p3.second.first << endl; //8
    cout << p3.second.second << endl; //A

    // cout << p3.second << endl;  => Not possible b/c pair comes as a output.
    
    return 0;
}