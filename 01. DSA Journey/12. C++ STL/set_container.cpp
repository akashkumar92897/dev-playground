#include <iostream>
#include <set>
using namespace std;
int main()
{
    set<int> s;
    s.insert(1);
    s.insert(2);
    s.emplace(3);
    s.insert(4);
    s.insert(5);

    for (auto val : s)
    {
        cout << val << " ";
    }
    cout << endl;

    cout << "Count of values = " << s.count(1) << endl;
    cout << "Size of set = " << s.size() << endl;
    cout << "Erase 3 = " << s.erase(3) << endl;
    cout << "Is empty? = " << s.empty() << endl;

    auto it = s.find(88);
    if (it != s.end()){
        cout << "Found\n";
    }else{
        cout << "Not found\n";
    }

    cout << "lower bound = " << *(s.lower_bound(4)) << endl;
    cout << "upper bound = " << *(s.upper_bound(4)) << endl;
    return 0;
}