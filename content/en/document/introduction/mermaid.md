---
title: Mermaid
description: Mermaid lets you create diagrams using text and code.
weight: 2
createdBy: thanh.vinh@hotmail.com
createdAt: "2022-01-27T15:46:00.129Z"
updatedBy: thanh.vinh@hotmail.com
updatedAt: "2022-01-27T15:47:14.891Z"
publishedAt: "2022-01-27T15:46:01.328Z"
---

**[Mermaid](https://mermaid-js.github.io/mermaid/#/) lets you create diagrams using text and code**. This simplifies the maintenance of complex diagrams. It is a Javascript based diagramming and charting tool that renders Markdown-inspired text definitions to create and modify diagrams dynamically.

## Flowchart

```mermaid
graph LR
  A[Hard edge] -->|Link text| B(Round edge)
  B --> C{Decision}
  C --> |One| D[Result one]
  C --> |Two| E[Result two]
```

## Sequence diagram

```mermaid
sequenceDiagram
autonumber
Alice ->> John: Hello John, how are you?
loop Healthcheck
John ->> John: Fight against hypochondria
end
Note right of John: Rational thoughts!
John -->> Alice: Great!
John ->> Bob: How about you?
Bob -->> John: Jolly good!
```

## Class diagram

```mermaid
classDiagram

Animal <|-- Duck
Animal <|-- Fish
Animal <|-- Zebra
Animal : +int age
Animal : +String gender
Animal: +isMammal()
Animal: +mate()

class Duck{
  +String beakColor
  +swim()
  +quack()
}

class Fish{
  -int sizeInFeet
  -canEat()
}

class Zebra{
  +bool is_wild
  +run()
}
```

## State diagram

```mermaid
stateDiagram-v2
[*] --> Active

state Active {
[*] --> NumLockOff
NumLockOff --> NumLockOn : EvNumLockPressed
NumLockOn --> NumLockOff : EvNumLockPressed
--
[*] --> CapsLockOff
CapsLockOff --> CapsLockOn : EvCapsLockPressed
CapsLockOn --> CapsLockOff : EvCapsLockPressed
--
[*] --> ScrollLockOff
ScrollLockOff --> ScrollLockOn : EvScrollLockPressed
ScrollLockOn --> ScrollLockOff : EvScrollLockPressed
}
```

## User Journey Diagram

```mermaid
journey
title My working day
section Go to work
Make tea: 5: Me
Go upstairs: 3: Me
Do work: 1: Me, Cat
section Go home
Go downstairs: 5: Me
Sit down: 5: Me
```

## Gantt diagram

```mermaid
gantt
title A Gantt Diagram
dateFormat YYYY-MM-DD
section Section
A task :a1, 2014-01-01, 30d
Another task :after a1 , 20d
section Another
Task in sec :2014-01-12 , 12d
another task : 24d
```

## Pie chart diagram

```mermaid
pie title Pets adopted by volunteers
title Key elements in Product X
"Calcium" : 42.96
"Potassium" : 50.05
"Magnesium" : 10.01
"Iron" : 5
```
