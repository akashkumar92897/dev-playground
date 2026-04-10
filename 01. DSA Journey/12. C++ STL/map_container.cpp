#include <iostream>
#include <map>
using namespace std;
int main (){
    map<string, int> m;     //By default, it sorts data into asscending order
    m["TV"] = 100;
    m["Laptop"] = 100;
    m["Phone"] = 50;
    m["Tablet"] = 120;
    m["Watch"] = 50;

    for (auto p: m){
        cout << p.first << " " << p.second << endl;
    }
    
    cout << "--------------------------------------------------------------------------------------" << endl;
    
    m.insert({"Camera", 23});
    m.emplace("Mic", 90);
    m.erase({"TV"});
    
    for (auto p: m){
        cout << p.first << " " << p.second << endl;
    }

    cout << "--------------------------------------------------------------------------------------" << endl;
    
    cout << "Count of Keys = " << m.count("Phone") << endl;
    cout << "Count number of values of key = " << m["Phone"] << endl;
    
    if(m.find("Watch") != m.end()) {
        cout << "Found\n";
    }else {
        cout << "Found\n";
    }
    
    cout << "Size of map = " << m.size() << endl;
    cout << "Erase 3 = " << m.erase("phone")<< endl;
    cout << "Is empty? = " << m.empty() << endl;

    cout << "--------------------------------------------------------------------------------------" << endl;


    return 0;
}