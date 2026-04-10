#include <iostream>
#include <deque>
using namespace std;
int main (){
    deque<int> d = {1, 2, 3};

    for (int val : d){
        cout << val << " ";
    }
    cout << endl;

    d.push_back(4);
    d.push_front(0);
    d.emplace_back(5);
    d.emplace_front(-1);
    d.pop_back();
    d.pop_front();

    cout << d.size() << endl; //5
    cout << d.front() << endl; //0
    cout << d.back() << endl; //4

    d.clear();
    cout << d.size() << endl; //0

    cout << d.empty() << endl; // 1
    return 0;
}