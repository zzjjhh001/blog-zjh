## data和properties
1. 在小程序里，properties和data指向的是同一个js对象，换一种说法，我们可以理解为：小程序会把properties对象和data对象合并成一个对象，这样不管我们打印的是this.properties还是打印this.data,他们的显示结果是一摸一样的。
2. 我们不要把data和properties里的变量设置成同一个名字，如果他们名字相同，properties里的会覆盖data里的。