# NG Error  : - smart way to deal with form control error

```
<form #appForm="ngForm">
    <input type='text'
           [(ngModel)]='name'
           required
           ngError='input-name'
           minlength="5" />


    <ng-error type="required"
              for="input-name"
              message="Name is required">
    </ng-error>
    <ng-error type="minlength"
              for="input-name"
              message="Please enter min length">
    </ng-error>
</form>
```

