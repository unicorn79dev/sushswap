import { AppPageComponent } from '../AppPageComponent'

export class AssetBalancesComponent extends AppPageComponent {
  private AssetBalancesTableBodySelector: string = '#asset-balances-body > div'

  public async getAssetBalances(): Promise<Record<string, number>> {
    let balances: Record<string, number> = {}

    await this.Page.waitForSelector(this.AssetBalancesTableBodySelector)
    const balancesList = await this.Page.$$(this.AssetBalancesTableBodySelector)

    for (const balanceRow of balancesList) {
      let assetSymbol: string = ''
      let assetBalance: number = 0

      const balanceCells = await this.Page.$$(`#asset-balances-row-${balancesList.indexOf(balanceRow)} > div`)

      for (let cellIndex = 0; cellIndex < balanceCells.length - 1; cellIndex++) {
        const balanceCell = balanceCells[cellIndex]
        const cellText = await this.Page.evaluate((item) => item.innerText, balanceCell)

        if (cellIndex === 0) {
          assetSymbol = cellText
        } else if (cellIndex === 1) {
          assetBalance = parseFloat(cellText)
        }
      }

      balances[assetSymbol] = assetBalance
    }

    return balances
  }
}
