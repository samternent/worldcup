# worldcup

```bash
npm install worldcup-2018 -g
```

```bash
$ worldcup -f --team=england

Tunisia vs England
England vs Panama
England vs Belgium
```

```bash
$ worldcup -G --team=germany

---------------
Group F
---------------
╔════════════╤════╤════╤════╤════╤════╗
║ Team       │ P  │ GF │ GA │ GD │ P  ║
╟────────────┼────┼────┼────┼────┼────╢
║ Germany    │ 0  │ 0  │ 0  │ 0  │ 0  ║
╟────────────┼────┼────┼────┼────┼────╢
║ Mexico     │ 0  │ 0  │ 0  │ 0  │ 0  ║
╟────────────┼────┼────┼────┼────┼────╢
║ Sweden     │ 0  │ 0  │ 0  │ 0  │ 0  ║
╟────────────┼────┼────┼────┼────┼────╢
║ Korea Rep… │ 0  │ 0  │ 0  │ 0  │ 0  ║
╚════════════╧════╧════╧════╧════╧════╝
```

```bash
$ worldcup -G --team=brazil -f

Sun 17 June 2018
19:00 Brazil vs Switzerland
Fri 22 June 2018
13:00 Brazil vs Costa Rica
Wed 27 June 2018
19:00 Serbia vs Brazil
---------------
Group E
---------------
╔════════════╤════╤════╤════╤════╤════╗
║ Team       │ P  │ GF │ GA │ GD │ P  ║
╟────────────┼────┼────┼────┼────┼────╢
║ Costa Rica │ 0  │ 0  │ 0  │ 0  │ 0  ║
╟────────────┼────┼────┼────┼────┼────╢
║ Serbia     │ 0  │ 0  │ 0  │ 0  │ 0  ║
╟────────────┼────┼────┼────┼────┼────╢
║ Brazil     │ 0  │ 0  │ 0  │ 0  │ 0  ║
╟────────────┼────┼────┼────┼────┼────╢
║ Switzerla… │ 0  │ 0  │ 0  │ 0  │ 0  ║
╚════════════╧════╧════╧════╧════╧════╝
```

```bash
$ worldcup --group=c

---------------
Group C
---------------
┌───────────────┬─────┬─────┬─────┬─────┬─────┐
│ Team          │ P   │ GF  │ GA  │ GD  │ P   │
├───────────────┼─────┼─────┼─────┼─────┼─────┤
│ France        │ 0   │ 0   │ 0   │ 0   │ 0   │
├───────────────┼─────┼─────┼─────┼─────┼─────┤
│ Australia     │ 0   │ 0   │ 0   │ 0   │ 0   │
├───────────────┼─────┼─────┼─────┼─────┼─────┤
│ Peru          │ 0   │ 0   │ 0   │ 0   │ 0   │
├───────────────┼─────┼─────┼─────┼─────┼─────┤
│ Denmark       │ 0   │ 0   │ 0   │ 0   │ 0   │
└───────────────┴─────┴─────┴─────┴─────┴─────┘
```



```bash
Usage: worldcup [options]

  Options:

    -f, --fixtures         fixtures
    -G, --groups           groups
    -g, --group [value]    group
    -t, --team [value]     team
    -p, --players [value]  team
    -h, --help             output usage information
```
