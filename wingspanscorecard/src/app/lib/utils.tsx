export function safeParseInt(value: FormDataEntryValue | null, defaultValue: number = 0) {
    if (value === null){
        return defaultValue;
    }
    const stringValue = String(value);
    const parsedValue = parseInt(stringValue, 10);
    if (isNaN(parsedValue)) {
        return(defaultValue);
    }
    return parsedValue;
}

// Noted bug: empty input is given a value of ten 