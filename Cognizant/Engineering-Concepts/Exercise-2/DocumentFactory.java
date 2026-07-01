package com.factorymethod;

public abstract class DocumentFactory {

    // Factory Method
    public abstract Document createDocument();

    // Common logic that uses the factory method
    public void openDocument() {
        Document document = createDocument();
        document.open();
    }
}