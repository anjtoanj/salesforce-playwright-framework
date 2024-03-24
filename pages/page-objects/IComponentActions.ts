import { Locator } from "@playwright/test";

export interface IComponentActions{

    /**
   * Attempts to click on the element identified by either a Playwright Locator or a string selector.
   *
   * @param locateUsing - The Playwright Locator or string selector to identify the clickable element.
   * *   If a string is provided, it will be used to obtain a Locator using the `generateLocator` method.
   * @param thresholdTimeout - (Optional) The maximum time, in milliseconds, to wait for the clickable element to be present and interactable.
   *   If not provided, a default timeout will be used.
   *
   * @returns A Promise that resolves when the click action is successfully performed on the element.
   *
   * @throws Will throw an error if the clickable element cannot be located, is not interactable, or if the click action fails.
   *
   * @example
   * // Example: Clicking with a Playwright Locator
   * const locator: Locator = obtain your Locator
   * await elementInteractor.clickOn(locator);
   *
   * // Example: Clicking with a string selector and a custom timeout
   * const selector: string = /* your selector
   * await elementInteractor.clickOn(selector, 5000);
   * */

    clickOn(locateUsing: Locator | string): Promise<void>;

     /**
   * Attempts to fill in a specified text value in the element identified by either a Playwright Locator or a string selector.
   *
   * @param locateUsing - The Playwright Locator or string selector to identify the input element.
   *   If a string is provided, it will be used to obtain a Locator using the `generateLocator` method.
   * @param textToEnter - The text value to be entered into the identified input element.
   * @param thresholdTimeout - (Optional) The maximum time, in milliseconds, to wait for the input element to be present and interactable.
   *   If not provided, a default timeout will be used.
   *
   * @returns A Promise that resolves when the text is successfully entered into the input element.
   *
   * @throws Will throw an error if the input element cannot be located, is not interactable, or if the fill action fails.
   *
   * @example
   * // Example: Filling in with a Playwright Locator
   * const locator: Locator = obtain your Locator ;
   * await elementInteractor.fillIn(locator, "Hello World");
   *
   * // Example: Filling in with a string selector and a custom timeout
   * const selector: string = your selector ;
   * await elementInteractor.fillIn(selector, "Lorem Ipsum", 5000);
   */

     fillIn(locateUsing: Locator | string, textToEnter: string): Promise<void>;

    /**
   * Checks if the specified locator is currently visible on the page.
   *
   * @param locateUsing - The Playwright Locator or string selector to identify the input element.
   * @param thresholdTimeout - (Optional) The maximum time, in milliseconds, to wait for the input element to be present and visible.
   *   If not provided, a default timeout will be used.
   *
   * @returns A Promise that resolves to true if the element is visible, false otherwise.
   *
   * @example
   * // Example: Checking visibility with a Playwright Locator
   * const locator: Locator = /* obtain your Locator
   * const isVisible: boolean = await elementInteractor.isLocatorVisible(locator);
   *
   * // Example: Checking visibility with a string selector
   * const selector: string =  your selector
   * const isSelectorVisible: boolean = await elementInteractor.isLocatorVisible(selector);
   */

    isLocatorVisible(locateUsing: Locator| string): Promise<void>;


    /**
   * Constructs a Playwright Locator based on the given string selector.
   *
   * @param selector - The string selector used to construct the Playwright Locator.
   *
   * @returns A Playwright Locator constructed from the provided string selector.
   *
   * @example
   * // Example: Constructing a locator with a string selector
   * const selector: string = your selector
   * const locator: Locator = elementInteractor.getLocator(selector);
   */

    getLocator(selector: string): Locator;

    verifyCountOfLocatorMatches(
        locateUsing: Locator | string,
        expNumberOfCount : number,        
    ): Promise<void>;
}