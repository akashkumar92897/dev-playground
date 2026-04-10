#include <iostream>
#include <list>
using namespace std;
int main (){
    list<int> l = {1, 2, 3};
    
    //l[2] => erro   -> Random access in list is not possible

    l.push_back(4);
    l.push_front(0);
    l.emplace_back(5);
    l.emplace_front(-1);
    l.pop_back();
    l.pop_front();
    // l.insert(l.begin() + 2, 100);
    
    for (int val: l){
        cout << val << " "; //0 1 2 3 4
    }
    cout << endl;
    cout << l.size() << endl; //5
    cout << l.front() << endl; //0
    cout << l.back() << endl; //4

    // l.erase(l.begin() + 2, l.begin() + 4);

    l.clear();
    cout << l.size() << endl; //0

    cout << l.empty() << endl; // 1
    return 0;
}