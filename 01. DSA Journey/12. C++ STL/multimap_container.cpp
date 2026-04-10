#include <iostream>
#include <map>
using namespace std;
int main (){
    multimap<string, int> m;     //Multimap can create duplicate keys
    m.emplace("TV", 100);
    m.emplace("TV", 100);
    m.emplace("TV", 100);
    m.emplace("TV", 100);

    // m.erase("TV");              // It will delete all the instances of TV

    m.erase(m.find("TV"));      // Will delete only 1 instance by finding it's address.
    for (auto p: m){
        cout << p.first << " " << p.second << endl;
    }

    return 0;
}