import { InjectionToken } from '@angular/core';

export const NG_ERROR_MESSAGE_REGISTRY = new InjectionToken<NgError>('mat-error-message-registry-token');

export class NgError {
    type: string;
    message: string;
    priority: number;
    value?: any;

    public static create(type: string, message: string, priority?: number, value?: any): NgError {
        const error = new NgError();
        error.type = type;
        error.message = message;
        error.priority = priority || 0;
        error.value = value;
        return error;
    }
}

export const NG_ERROR_MESSAGE_PROVIDER = [
    {
        provide: NG_ERROR_MESSAGE_REGISTRY,
        useValue: NgError.create('required', '{0} is required'),
        multi: true
    },
    {
        provide: NG_ERROR_MESSAGE_REGISTRY,
        useValue: NgError.create('minlength', '{0} must have at least {1} characters'),
        multi: true
    },
    {
        provide: NG_ERROR_MESSAGE_REGISTRY,
        useValue: NgError.create('maxlength', '{0} must have at max {1} characters'),
        multi: true
    },
    {
        provide: NG_ERROR_MESSAGE_REGISTRY,
        useValue: NgError.create('email', '{0} is not valid.'),
        multi: true
    }
];

export function formatString(str: string, ...args: string[]): string {
    args.forEach((item: string, index: number) => {
        const regex = new RegExp(`\\{[${index}]}`);
        str = str.replace(regex, item);

    });
    return str;
}
