# narvi

Zadanie polega na stworzeniu prostej aplikacji w **ReactJS** wykorzystującej **React Query**, **React hook form (+Yup)** i **MUI (komponenty, stylowanie)** do wyszukiwania użytkowników **GitHub** za pomocą darmowego API GitHub (https://api.github.com). Aplikacja powinna umożliwiać użytkownikowi wpisanie nazwy użytkownika i wyświetlenie wyników w postaci karty z informacjami o użytkownikach.

Głównym celem zadania jest zobaczenie w jaki sposób piszesz kod i strukturyzujesz aplikacje. Nie spędź nad tym zadaniem za dużo czasu. Jeśli uważasz że pokazałes wystarczająco, prześlij do nas zadanie w satysfakcjonującej Cię formie. Udostępnij apke i kod przez GitHub.

Wymagania:
* **ReactJS i React Query**:
* Skorzystaj z **React Query** do wykonywania zapytań do API GitHub.
* Dane powinny być pobierane asynchronicznie, a stan zapytania (wczytywanie, błąd, sukces) powinien być odpowiednio obsłużony.

UI/UX:
* Za pomocą formularza użytkownik powinien móc wprowadzić nazwę użytkownika GitHub, a następnie po 2 sekundach od skończenia wpisywania, wyświetlić wyniki.

Wyniki wyszukiwania:
* Wyświetl listę pasujących użytkowników GitHub na podstawie nazwy użytkownika.
* Dla każdego użytkownika w wynikach wyświetl avatar użytkownika, nazwę użytkownika (login).
* W przypadku braku wyników lub błędu, wyświetl odpowiedni komunikat.

Paginacja:
* Użyj infinite scrolla (chociażby z libki ‘react-infinite-scroller’) do pokazywania wyników listy

Testy:
* Dodaj testy jednostkowe dla komponentów i logiki aplikacji. Zależy nam żeby zobaczyć w jaki sposób piszesz testy przy użyciu JEST’a, nie musi być ich dużo.

Stylowanie:
* Skorzystaj z biblioteki Material UI, nie przykładaj sie przesadnie do wyglądu, od tego mamy w teamie UX’a, ale chcemy zobaczyć w jaki sposób stylujesz i układasz komponent.

Conajmniej w jednym miejscu w kodzie zawrzyj jakąś ciekawą (i użyteczną) technikę związaną z programowaniem funkcyjnym i oznacz to w komentarzu.

API GitHub:
Endpoint: https://api.github.com/search/users?q={username}
Dokumentacja: https://docs.github.com/en/rest/search#search-users
Przykładowe zapytanie:
https://api.github.com/search/users?q=John
