#include <iostream>
#include <unordered_map>
using namespace std;
int main (){
    unordered_map<string, int> m;     //By default, it sorts data into asscending order
    m["TV"] = 100;
    m["Laptop"] = 100;
    m["Phone"] = 50;
    m["Tablet"] = 120;
    m["Watch"] = 50;

    for (auto p: m){
        cout << p.first << " " << p.second << endl;
    }
    
    return 0;
}