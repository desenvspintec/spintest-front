import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import {PessoaFisicaService} from '../../../../service/pessoa-fisica/pessoa-fisica.service';
import {BaseLinePlanejadoService} from '../../../../service/base-line-planejado/base-line-planejado.service';
import { MessageService } from 'primeng/api';
import {PTBR} from '../../../../utils/calendar';
//rxjs
import { Subject } from 'rxjs';
import {Channels} from '../../../../../environments/channels';
import { DataService } from 'src/app/components/services/data-service/data.service';



@Component({
  selector: 'app-cadastrar-baseline',
  templateUrl: './cadastrar-baseline.component.html',
  styleUrls: ['./cadastrar-baseline.component.css']
})
export class CadastrarBaselineComponent implements OnInit, OnDestroy {

  public form: FormGroup;
  public ptBr = PTBR;

  private _unsubscribeAll: Subject<any> = new Subject();
  private _channelPlanoTeste: string = Channels.pages.planejamento.plano_de_teste.plano_de_teste;

  pessoas: any[];
  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _pessoaFisicaService: PessoaFisicaService,
    private _baseLinePlanejadoService: BaseLinePlanejadoService,
    private _messageService: MessageService,
    private _dataService: DataService) { }

  ngOnInit() {
    this._buildForm();

  
    this._pessoaFisicaService.findAll()
    .subscribe(pessoas => this.pessoas =
      pessoas.map(pessoa => {
        return {
          label: pessoa.nome,
          value: pessoa.id
        };
      }));

     
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  public salvar() {
    if (this.form.invalid) {
      return;
    }
    const planoTeste = this._dataService.getData(this._channelPlanoTeste);
    let baseline = this.form.value;
    baseline.planoTesteId = planoTeste.id;
    baseline.empresaId = planoTeste.empresaId;
    this._baseLinePlanejadoService.save(baseline, baseline => {
      this.form.setValue(baseline);
      this._messageService.add({
        severity: 'success',
        detail: 'Baseline salvo com sucesso!'
      });
      this.voltar(null);
    });

  }

  private _buildForm(): void {
    this.form = this._formBuilder.group({
      id: [''],
      descricao: ['', Validators.required],
      planoTesteId: [''],
      empresaId: [''],
      userExecutorId: [''],
      updatedUserId: [''],
      userId: [''],
      situacao: [''],
      dataInicio: ['', [Validators.required]],
      dataFinal: ['', [Validators.required]],
      horaInicio: ['', Validators.required],
      horaFinal: ['', Validators.required],
      updatedAt: [''],
      createdAt: [''],
    });
  }

  public voltar(event): void {
    const navigateUrl = 'planejamento/planodeteste/base/listabaseline';
    this._router.navigate([navigateUrl]);
  }


}

function validaData(control: AbstractControl): object {

  if (!control.parent || !control) {
    return;
  }

  const dataInicio = control.parent.get('dataInicio');
  const dataFinal = control.parent.get('dataFinal');

  if (dataInicio && dataFinal) {
    if ((dataFinal.value < dataInicio.value) ||
      dataInicio.value > dataFinal.value) {
      return {
        invalid: true
      };
    }
  }


}

